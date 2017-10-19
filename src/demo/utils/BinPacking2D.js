class BST{
  constructor(rects, width, height){
    this.root = {
      w: width,
      h: height,
      x: 0,
      y: 0
    }
    this.rects = rects
    this.width = width
    this.height = height
    this.packedRects = []
  }
  splitContainer(container, rect){
    container.used = true
    container.right = {
      w: container.w - rect.w,
      h: rect.h,
      x: container.x + rect.w,
      y: container.y
    }
    container.bottom = {
      w: container.w,
      h: container.h === undefined ? undefined : container.h - rect.h,
      x: rect.x,
      y: container.y + rect.h
    }
    return container
  }
  traversel(container, rect){
    if(container.used){
      return this.traversel(container.right, rect) || this.traversel(container.bottom, rect);
    }else if(rect.w <= container.w && (container.h === undefined ? true : rect.h <= container.h)){
      return container
    }else{
      return null
    }
  }
  packingRects(){
    this.rects.forEach((rect, index)=>{
      const container = this.traversel(this.root, rect)
      if(container){
        rect.x = container.x
        rect.y = container.y
        this.packedRects.push(rect)
        this.splitContainer(container, rect)
      }
    })
  }
  getPacked(){
    this.packingRects()
    return this.packedRects
  }
}

export function BinPacking2D(rects, width, height) {
  if(rects && width){
    const packingInstance = new BST(rects, width, height)
    return packingInstance.getPacked()
  }
}
